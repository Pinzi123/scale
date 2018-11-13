export declare class Scale {
    private listenDom;
    private scaleDom;
    private _scale;
    private _maxScale;
    private _minScale;
    private _step;
    private _originH;
    private _originW;
    minScale: number;
    maxScale: number;
    scale: number;
    readonly step: number;
    constructor(listenDom?: HTMLElement, scaleDom?: HTMLElement);
    initData(listenDom: HTMLElement, scaleDom?: HTMLElement): void;
    private init;
    private scrollFunc;
    reset(): void;
    changeView(): void;
    changeScale(scale: number): void;
    dispose(): void;
    reduce(): void;
    add(): void;
}
