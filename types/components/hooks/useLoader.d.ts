/// <reference types="react" />
export declare const useLoader: () => {
    setLoading: (bool: boolean) => void;
    isLoading: boolean;
    Loader: ({ loaderType }: import("../Loader/Loader").LoaderHookProps) => import("react").ReactPortal;
};
