/**
 *    EXAMPLE1
 *    @param  {[type]} data    [description]
 *    @param  {[type]} present [description]
 *    @return {[type]}         [description]
 */
function action(data,present) {
    
    // compute the values we want the model to mutate to
    var data_ = the_actual_pure_function_implementing_the_action(data) ;
    
    // present these values to the model
    present(data_) ;
    
    // since we are in a reactive loop, the action returns nothing
}

/**
 *    EXAMPLE2
 *    @param  {[type]} address [description]
 *    @param  {[type]} present [description]
 *    @return {[type]}         [description]
 */
function changeOfAddress(address,present) {
        
  address = address || {} ;
  address.country = address.country || 'Australia' ; 
  getPostalAddress( address, function(addr) {
      // assuming the dataset returned by the 3rd party
      // service can be directly presented to the model
      present(addr);
  }) ;
}

/**
 *    Example3
 *    @param  {[type]} data   [description]
 *    @param  {[type]} render [description]
 *    @return {[type]}        [description]
 */
model.present = function(data, render) {
        
  if (data.address !== undefined) {
      model.shippingAddress = data.address ;
      model.billingAddress = model.billingAddress || data.address ;
  }
  
  // trigger the state representation rendering
  render(model) ;
  
  // since we are in a reactive loop, the present method returns nothing
}