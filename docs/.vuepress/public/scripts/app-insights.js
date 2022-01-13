/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com).
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { ApplicationInsights } from "@microsoft/applicationinsights-web"
/**
 * App Insights class to perform application insights related functions.
 */
export class AppInsights {
    /**
     * Private constructor to avoid object initialization from 
     * outside the class.
     */
    constructor() {
        this.isEnabled = true;
        this.isInitialized = false;
        this.instrumentationKey = "{AZURE_INSTRUMENTATION_KEY}";
    }

    /**
     * Initialize application insights and other needed common variables.
     * 
     * @returns {boolean} True if initialization successful. Else false.
     */
    init() {
        
        if (!this.isEnabled) {
            return false;
        }

        // Create application insights instance if not already created.
        if (!this.externalAppInsightsInstance) {
            // Read configuration values.
            const endpointUrl = "{INSIGHTS_ENDPOINT_URL}";

            // Disable if the instrumentation key is not provided.
            if (this.instrumentationKey === "") {
                this.isEnabled = false;
                return false;
            }

            // Construct the config object.
            const config = {
                instrumentationKey: this.instrumentationKey,
            };

            if (endpointUrl !== "") {
                config.endpointUrl = endpointUrl;
            }

            this.externalAppInsightsInstance = new ApplicationInsights({
                config: config
            });

            this.externalAppInsightsInstance.loadAppInsights();

            /**
             * Uncomment if need to track all page visits.
             */
            // this.externalAppInsightsInstance.trackPageView();
        }

        this.isInitialized = true;
        return true;
    }

    /**
     * Send analytics data to insights server.
     * 
     * @param {string} eventId - Event identifier string.
     * @param { [key: string]: string | Record<string, unknown> | number } [customProperties] - 
     *     Any custom properties (optional).
     */
    trackEvent(eventId, customProperties = null) {

        if (!this.isEnabled) {
            return;
        }

        const properties = {};

        if (!this.isInitialized) {
            if (!this.init()) {
                return;
            }
        }
        
        if (customProperties) {
            properties.data = customProperties;
        }

        /**
         * Send telemetry to the server.
         */
        this.externalAppInsightsInstance.trackEvent({ name: eventId }, properties);
    }
}
