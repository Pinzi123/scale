export class Scale{
    private _scale: number = 1;
    private _maxScale: number = 2;
    private _minScale: number = 0.5;
    private _step:number = 0.05;
    private _originH:number = 0;
    private _originW:number = 0;
    public get minScale(): number {
        return this._minScale;
    }
    public set minScale(value: number) {
        this._minScale = value;
    }
    public get maxScale(): number {
        return this._maxScale;
    }
    public set maxScale(value: number) {
        this._maxScale = value;
    }
    public get scale(): number {
        return this._scale;
    }
    public set scale(value: number) {
        this._scale = value;
    }
    public get step():number{
        return this._step;
    }
    
    
    constructor(private listenDom:HTMLElement = null,private scaleDom:HTMLElement = null){
        if(listenDom !== null){
            this.init();
        }
    }

    public initData(listenDom:HTMLElement,scaleDom:HTMLElement = null){
        if(this.listenDom){
            this.dispose();
        }
        this.scale = 1;
        this.listenDom = listenDom;
        this.scaleDom = scaleDom;
        this.init();
    }
    

    private init(){
        
        this._originH = this.scaleDom.clientHeight;
        this._originW = this.scaleDom.clientWidth;
        if(this.scaleDom == null){
            this.scaleDom = this.listenDom;
        }
        this.dispose();
        this.listenDom.addEventListener('mousewheel',this.scrollFunc, false); 

    }

    private scrollFunc = ($event:any) => {
        
        if($event.wheelDelta >0){
            this.add();
        }else{
            this.reduce();
        }
        
    }

    public reset(){
        this.scale = 1;
        this.changeView();
    }

    public changeView(){
        let canvasW: number = 0;
        let canvasH: number = 0;

        canvasH = this._originH * this.scale;
        canvasW = this._originW * this.scale;
        this.scaleDom.style.width = canvasW  + "px";
        this.scaleDom.style.height = canvasH  + "px";
    }

    public changeScale(scale:number){
        this.scale = scale;
        this.changeView();
    }

    public dispose(){
        // this.listenDom.removeEventListener('mousewheel',this.scrollFunc, false); 
    }

    public reduce(){
        if(this.scale < this.minScale) return;
        this.scale -= this._step;
        this.changeView();   
    }

    public add(){
        if(this.scale > this.maxScale) return;
        this.scale += this._step;
        this.changeView();   
    }

}