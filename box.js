class box
{
	constructor(x, y,width,height)
	{
		var options={
			restitution: 0.1,
			friction:0.3,
			density:0.2
			
			}
		
		this.body=Bodies.rectangle(x, y,width,height, options);
		this.width = width;
		this.height = height;
		this.y = y;
		this.x = x;
		World.add(world, this.body);

	}
	display()
	{
		var pos =this.body.position;
      rectMode(CENTER);
     strokeWeight(3);
      rect(pos.x, pos.y, this.width, this.height);
	}

} 

 
