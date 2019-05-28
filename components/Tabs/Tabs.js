

  const cards = document.querySelectorAll('.card');

  const tabs = document.querySelectorAll('.tab');

  // tabs.forEach(tab => new TabLink(tab));



class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab; 
    // this.tabData = document.querySelector(`.card[data-tab="${this.tabElement.dataset.tab}"]`);
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
  
    // Check to see if this.tabData is equal to 'all'
    if(this.tabData === 'all') {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = Array.from(this.cards).map((card) => {
      new TabCard(card);
    });

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {
      this.selectTab();
    });

    
  }

  selectTab(){
    if(this.tabData === 'all') {
      // If `all` is true, select all cards regardless of their data attribute values
      this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
      this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    }

    let cardSelector = document.querySelectorAll('.cards-container');

      // Iterate through the NodeList setting the display style each one to 'none'
  cards.forEach( item => {
    item.style.display = 'none';
  })

  this.cards.forEach(item => {
    item.style.display = 'flex';
  })
  
  // Add a class of ".active-tab" to this.tabElement

  tabs.forEach( item => {
    item.classList.remove('active-tab');
  })

  //
  this.tabElement.classList.add('active-tab');


  }


}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }


}

  // Iterate through the NodeList removing the .active-tab class from each element
  tabs.forEach( item => {
    item.classList.remove('.active-tab');
    let link = new TabLink(item);
  })




/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/

// // Step 3
// class TabLink {
//   constructor(tabElement) {
//     this.tabElement = tabElement;
//     this.card = document.querySelector(`.card[data-tab='${this.tab.dataset.tab}`);
//     this.card = new Card(this.card);
//     this.tab.addEventListener('click', () => this.tabClick());
  
//   if(this.tabData === 'all') {
//     // If `all` is true, select all cards regardless of their data attribute values
//     this.cards = document.querySelectorAll('.card');
//   } else {
//     // else if `all` is false, only select the cards with matching this.tabData values
//     this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
//     }
//   }
//   // methods
//   tabClick() {
//     this.card.toggleCard();
//   }
// } // tab

// class Content {
//   constructor(card) {
//     this.cardElement = card;
//   }
//   // methods
//   toggleCard() {
//     this.cardElement.classList.toggle('change');
//   }
// }

// // Step 1
// let tabs = document.querySelectorAll('.tab');

// // Step 2
// tabs.forEach(function(tab){
//   return new TabLink(tab)
// })