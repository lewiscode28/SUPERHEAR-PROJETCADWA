AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "spooder-dude",
          title: "SPIDERMAN",
          url: "./assets/spiderman-poster.jpg",
        },
        {
          id: "pooper-man",
          title: "SUPERMAN",
          url: "./assets/superman-poster.jpg",
        },
  
        {
          id: "star-war",
          title: "OUTERSPACE",
          url: "./assets/outer-space-poster.jpg"
        },
        {
          id: "aero-chocolate",
          title:"CAPTAIN AERO",
          url: "./assets/captain-aero-poster.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorders(position,item.id)
        // Thumbnail Element
       const thumbnailsEl=this.createThumbnails(item)
       borderEl.appendChild(thumbnailsEl)
        // Title Text Element
       const  titleEl=this.createTitle(position,item)
       borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorders: function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
  
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:30})
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"#fff"})
      return entityEl
    },
    createThumbnails: function(item){
      const entityEl=document.createElement("a-entity")
     
  
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{primitive:"plane",width:20,height:30})
      entityEl.setAttribute("position",{x:0,y:5,z:0.1})
      entityEl.setAttribute("material",{src:item.url})
      return entityEl   
    },
    createTitle: function(position,item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title,})
  
      entityEl.setAttribute("visible",true)
      const elPosition=position
      elPosition.y=-20
      entityEl.setAttribute("position",elPosition)
    
      return entityEl
    }
  });