var THREE = require('three')
import Boid from './boid';

export default class BoidColumns {
    constructor(scene, boids) {
      this.leftColumn = new THREE.Group();
      this.rightColumn = new THREE.Group();
      // Position columns
      this.leftColumn.position.set(-10, 0, 0);
      this.rightColumn.position.set( 20, 0, 0);
      scene.add(this.leftColumn);
      scene.add(this.rightColumn);
   
    
      // Create and add fixed text sprite
      const messageText = this.createTextSprite("WHAT ARE YOU TRYING TO TELL ME");
      this.rightColumn.add(messageText);
    }
  
    update() {

    }
    
  
    createTextSprite(message) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = 1024; // Adjust as needed
      canvas.height = 128;
      context.fillStyle = '#FFFFFF'; // White text
      context.textAlign = 'center';
      context.font = '24px Arial';
      context.fillText(message, canvas.width / 2, canvas.height / 2);
    
      var texture = new THREE.CanvasTexture(canvas);
      var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      var textSprite = new THREE.Sprite(spriteMaterial);
      textSprite.scale.set(200, 100, 1); // Adjust scale as needed
    
      return textSprite;
    }
  }