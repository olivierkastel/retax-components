// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/c6e62c350f3886a0ae7c8c3635e89d7a1b409459/react-helmet/react-helmet.d.ts
// Type definitions for react-helmet
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'react-helmet' {
    import { Component } from 'react';

    interface HelmetProps {
        title?: string;
        titleTemplate?: string;
        base?: any;
        link?: Array<any>;
        meta?: Array<any>;
        script?: Array<any>;
        onChangeClientState?: (newState: any) => void;
    }

    interface HelmetData {
        title: HelmetDatum;
        base: HelmetDatum;
        link: HelmetDatum;
        meta: HelmetDatum;
        script: HelmetDatum;
    }

    interface HelmetDatum {
        toString(): string;
        toComponent(): Component<any, any>;
    }

    class Helmet extends Component<HelmetProps, any> {
        static rewind(): HelmetData
    }

    export default Helmet;
}