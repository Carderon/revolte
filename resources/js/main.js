import { defineGrid, extendHex } from 'honeycomb-grid'
import { SVG } from '@svgdotjs/svg.js'
import { Hex } from "./components/hex.js"
import Panzoom from '@panzoom/panzoom'

document.addEventListener("DOMContentLoaded", function() {
    const draw = SVG().addTo('.map').size(2100, 2100)
    
    const Grid = defineGrid(Hex)
    
    const grid = Grid.rectangle({
        width: 40,
        height: 47,
        // render each hex, passing the draw instance
        onCreate(hex, grid) {
            hex.render(draw, grid);
        }
    });
    
    var map = document.querySelector('.map');
        
    var panzoom = Panzoom(map, {
        // $zoomIn: $(".zoom-in"),
        // $zoomOut: $(".zoom-out"),
        // $zoomRange: $(".zoom-range"),
        // $reset: $(".reset"),
        startTransform: 'scale(1.1)',
        increment: 0.1,
        minScale: 1,
        contain: 'outside'
    });
    
    map.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
})

