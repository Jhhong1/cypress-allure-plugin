/// <reference types="cypress" />
import { Category, ContentType, Status, Severity, LinkType, LabelName } from 'allure-js-commons'

type LabelNames = keyof typeof LabelName
type LinkTypes = keyof typeof LinkType
type ContentTypes = keyof typeof ContentType
type Statuses = keyof typeof Status
type Severities = keyof typeof Severity

declare global {
    namespace Cypress {
        interface Chainable<Subject = null> {
            /**
            * Parent command to start interaction with Allure API
            */
            allure(): Allure
        }

        interface Cypress {
            /**
             * Interface via Cypress global object
             */
            "Allure": {
                "reporter": {
                    getInterface(): Allure
                }
            }

        }

        interface Allure {
            /**
             * Add Epic name to Allure
             * @param {string} epic 
             */
            epic(epic: string): Allure;
            /**
             * add feature
             * @param {string} feature 
             */
            feature(feature: string): Allure;
            /**
             * add Story name
             * @param story 
             */
            story(story: string): Allure;
            /**
             * add Suite
             * @param name 
             */
            suite(name: string): Allure;
            /**
             * Add Label
             * @param name 
             * @param value 
             */
            label(name: LabelNames, value: string): Allure;
            /**
             * Add Parameter
             * @param name 
             * @param value 
             */
            parameter(name: string, value: string): Allure;
            /**
             * Add customized link
             * @param {string} url 
             * @param {string} name 
             * @param type 
             */
            link(url: string, name?: string, type?: LinkTypes): Allure;
            /**
             * Add issue link
             * @param name 
             * @param url 
             */
            issue(name: string, url: string): Allure;
            /**
             * Add tms link
             * @param name 
             * @param url 
             */
            tms(name: string, url: string): Allure;
            /**
             * Add test description in markdown format
             * @param markdown 
             */
            description(markdown: string): Allure;
            /**
             * Add test description in html format
             * @param html 
             */
            descriptionHtml(html: string): Allure;
            /**
             * Add test owner
             * @param owner 
             */
            owner(owner: string): Allure;
            /**
             * Add severity level
             * @param severity 
             */
            severity(severity: Severities): Allure;
            /**
             * Add tag
             * @param tag 
             */
            tag(tag: string): Allure;
            /**
             * Attach environmental info
             * @param info - <key, value> format
             */
            writeEnvironmentInfo(info: Record<string, string>): Allure;
            /**
             * Attach test categories failures definition
             * @param categories 
             */
            writeCategoriesDefinitions(categories: Category[]): Allure;
            /**
             * Attachment outside test
             * @param name 
             * @param content 
             * @param type 
             */
            attachment(name: string, content: Buffer | string, type: ContentTypes): Allure;
            /**
             * Attach info to test
             * Screenshots will be attached automatically
             * @param name 
             * @param content 
             * @param type 
             */
            testAttachment(name: string, content: Buffer | string, type: ContentTypes): Allure;
            /**
             * Log step into Test Execution Body
             * @param name - step name
             * @param body - may be some status or function which wraps step code
             */
            logStep(name: string, body?: Statuses | Function): Allure;
        }
    }
}
