declare module jasmine {
    interface Matchers {
        toContainText(text: string): boolean;
    }
}

declare var Auth0Lock: any;
