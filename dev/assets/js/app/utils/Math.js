

class Math_ {
	
	
	constructor() {
		
	}
	
	
	getElPos( elW, elH, contW, contH ) {
		const elRatio	= elW / elH;
		const contRatio	= contW / contH;
		const pos		= {
			x: 0,
			y: 0,
			w: 0,
			h: 0
		};
		
		if ( elRatio < contRatio ) {
			pos.w = contW;
			pos.h = Math.round( pos.w / elRatio );
			pos.y = Math.round( - ( pos.h - contH ) / 2 );
		}
		else {
			pos.h = contH;
			pos.w = Math.round ( pos.h * elRatio );
			pos.x = Math.round ( - ( pos.w - contW ) / 2 );
		}
		
		
		return pos;
	}
	
	
	getCropPos( elW, elH, contW, contH ) {
		const elRatio	= elW / elH;
		const contRatio	= contW / contH;
		const pos		= {
			x: 0,
			y: 0,
			w: 0,
			h: 0
		};
		
		if ( elRatio < contRatio ) {
			pos.w = elW;
			pos.h = Math.round( pos.w / contRatio );
			pos.y = Math.round( - ( pos.h - elH ) / 2 );
		}
		else {
			pos.h = elH;
			pos.w = Math.round ( pos.h * contRatio );
			pos.x = Math.round ( - ( pos.w - elW ) / 2 );
		}
		
		
		return pos;
	}
	
	
	degToRad( deg ) {
		return deg * Math.PI / 180;
	}
	
	
	radToDeg( rad ) {
		return rad * 180 / Math.PI;
	}
	
	
	getHypotenuse( widthA, widthB ) {
		return Math.sqrt( widthA * widthA + widthB * widthB );
	}
	
	
	getInertia( destValue, value, inertia, hasMinStep = true, minStep = 0.01 ) {
		const valueToAdd = !hasMinStep || hasMinStep && Math.abs ( ( destValue - value ) * inertia ) >= minStep ?
							( destValue - value ) * inertia :
							destValue - value;
		value			+= valueToAdd;
		
		
		return value;
	}
	
	
}


module.exports = new Math_();

