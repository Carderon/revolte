import { extendHex } from 'honeycomb-grid'
import MAP from './../data/map.js'

export const Hex = extendHex({
    size: 30,
    data: {},  

    render(draw, grid) {
        const { x, y } = this.toPoint();
        const corners = this.corners();
                
        this.data = MAP && MAP[this.x] && MAP[this.x][this.y] ? MAP[this.x][this.y] : {};
        
        this.draw = draw
            .polygon(corners.map(({x,y}) => `${x},${y}`))
            .fill('transparent')
            .stroke({width: 1,color: '#999'})
            .translate(x, y)
            .on("mouseover", this.mouseOver)
            .on("mouseout", this.mouseOut)
            .on("click", this.click, {element: this, grid: grid})
    },

    mouseOver() {
        this.fill({ opacity: .25, color: 'blue'})
    },

    mouseOut() {
        this.fill({ opacity: 0, color: 'transparent'})
    },
    
    click() {
        console.warn(this.grid.neighborsOf(this.element));
        console.warn(this.element.x, this.element.y, this.element.data);
    }
});