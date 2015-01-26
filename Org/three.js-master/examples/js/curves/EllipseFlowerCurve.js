/**************************************************************
 *	Ellipse flower curve 
 **************************************************************/

THREE.EllipseFlowerCurve = function ( aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise ) {

	this.aX = aX;
	this.aY = aY;

	this.xRadius = xRadius;
	this.yRadius = yRadius;

	this.aStartAngle = aStartAngle;
	this.aEndAngle = aEndAngle;

	this.aClockwise = aClockwise;

};

THREE.EllipseFlowerCurve.prototype = Object.create( THREE.Curve.prototype );

THREE.EllipseFlowerCurve.prototype.getPoint = function ( t ) {

	var angle;
	var deltaAngle = this.aEndAngle - this.aStartAngle;

	if ( deltaAngle < 0 ) deltaAngle += Math.PI * 2;
	if ( deltaAngle > Math.PI * 2 ) deltaAngle -= Math.PI * 2;

	if ( this.aClockwise === true ) {

		angle = this.aEndAngle + ( 1 - t ) * ( Math.PI * 2 - deltaAngle );

	} else {

		angle = this.aStartAngle + t * deltaAngle;

	}

	if (t % 2 =0){
		var tx = this.aX + this.xRadius * Math.cos( angle ) * 1.1;
		var ty = this.aY + this.yRadius * Math.sin( angle ) * 1.1;

	}else{
		var tx = this.aX + this.xRadius * Math.cos( angle ) * 0.9;
		var ty = this.aY + this.yRadius * Math.sin( angle ) * 0.9;

	}

	return new THREE.Vector2( tx, ty );

};
