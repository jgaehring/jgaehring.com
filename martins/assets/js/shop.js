// Prototype object for Shop Items
const itemProto = {

  // Some Defaults
  id: "no id",
  name: "Item Name",
  options: [],

  // Method for matching the user's currently selected option on the form, to the corresponding option in the `shopCollection` object, so it's price and other properties can be accessed.
  getOptionIndex: function getOptionIndex() {
    let optionIndex = null;
    let selectedOption = $(this.id).find(".option").val();
    this.options.forEach(function(element, index) {
      if (element.optionName === selectedOption) {
        optionIndex = index;
      }
    });
    return optionIndex
  },

  // Method for calculating the price dynamically, based on the user's selections in the form, for Quantity and Options (ie, 3lb or 6lb box, extra salty, etc etc)
  calcPrice: function calcPrice() {
    let id = this.id
    let qty = $(id).find(".qty input").val();
    let optionIndex = this.getOptionIndex();
    let displayPrice = $(id).find(".price p");
    let unitPrice = $(id)
    .find(".unit-values div:nth-child(" + (optionIndex + 1).toString() + ")  .unit-price")
    .prop('innerHTML')
    .match(/\d+\.?\d+/g)[0];
    let displayOption = $(id)
    .find(".unit-values div:nth-child(" + (optionIndex + 1).toString() + ")  .option-name")
    .prop('innerHTML');
    var totalPrice = qty * unitPrice;
    totalPrice = totalPrice.toFixed(2);
    displayPrice.text("$" + totalPrice + " + tax & shipping");
    let name = $((this.id) + " .card-title h3").prop('innerHTML');
    console.log(totalPrice);
  },

  // Method for calling `calcPrice` at page-load, and then whenever the user makes changes to the form.
  itemListener: function itemListener(item) {
    this.calcPrice()
    $(item.id + " .qty input").change( function() {
      item.calcPrice()
    });
    $('.ui-menu').on('click', function(event) {
      shopCollection.items.forEach( function(element) {
        element.calcPrice()
      }
    );
    });
    $('.ui-menu').on('focusin', function(event) {
      shopCollection.items.forEach( function(element) {
        element.calcPrice()
      }
    );
    });
    $('.ui-menu').on('focusout', function(event) {
      shopCollection.items.forEach( function(element) {
        element.calcPrice()
      }
    );
    });
  },
};


// Move all Shop elements from DOM (via jquery) into a new array, so they're easier to iterate over, then create an empty object, `shopCollection` where they can be instantiated as object literals further on down.
let elementsArray = $.makeArray($('.shop-item'));
let shopCollection = {
  items: []
};

// Factory function for instantiating items from their Prototype object, `itemProto`
const itemFactory = function itemFactory(options) {
  return $.extend(Object.create(itemProto), options);
};

// Instantiate each new items in `shopCollection` object via `itemFactory` and set Properties
const setProps = function setProps(element, index) {
  shopCollection.items[index] = itemFactory({
    id: "#" + $(element).attr('id'),
    name: $(element).find(".card-title h3").prop('innerHTML'),
    options: [] })
  }

// Push Properties for each Option onto the `shopCollection` object
const setOptProps = function setOptProps(element, index) {
  this.options.push({
    optionId: "#" + $(element).attr('id').replace(/\s\s+/g, ""),
    optionName: $(element).find(".option-name").prop('innerHTML').replace(/\s\s+/g, ""),
    price:  Number($(element).find(".unit-price").prop('innerHTML').match(/\d+\.?\d+/g)[0].replace(/\s\s+/g, "")),}
  );
};

// Set Options for each Item in `shopCollection`
const setOpts = function setOpts(element, index) {
  let itemIndex = index;
  let itemName = shopCollection.items[itemIndex].name;
  let id = element.id;
  // console.log("each id", element.id);
  let options = $(id).find(".unit");
  // console.log(options);
  let optionsArray = $.makeArray(options);
  // console.log("optionsArrapushy", optionsArray);
  optionsArray.forEach( setOptProps, shopCollection.items[itemIndex]
  );
};


// Function calls for initializaing properties, setting options & prices, and listening for form changes to recalculate prices.
elementsArray.forEach( setProps );
shopCollection.items.forEach( setOpts );
shopCollection.items.forEach( function(element) { element.itemListener(element); });
