import React from 'react';
import '../index.css';
export declare const loaderTypes: readonly ["spinner", "pluckCards", "pagePulse"];
export type LoaderHookProps = {
    loaderType: typeof loaderTypes[number];
};
export declare const Loader: ({ loaderType }: LoaderHookProps) => React.ReactPortal;
