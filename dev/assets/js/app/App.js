

const WebGLScene	= require( 'WebGLScene' );
const Lights		= require( 'Lights' );
const Sphere		= require( 'Sphere' );


class App {
	
	
	constructor() {
		
	}
	
	
	init() {
		console.log( '🐣 App.init()' );
		
		this.initEl();
	}
	
	
	initEl() {
		this._initScene();
		// this._initLights();
		this._initObjects();
	}
	
	
	_initScene() {
		this.webGLScene = new WebGLScene();
		this.webGLScene.init();
	}
	
		
	_initLights() {
		this.lights = new Lights( this.webGLScene );
		this.lights.init();
	}
	
	
	_initObjects() {
		const sphere = new Sphere( this.webGLScene );
		sphere.init();
	}
	
	
}


module.exports = App;

