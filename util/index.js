/**
 * Created by L075728 on 10/08/2017.
 */



/*
* @Arg1: Object that is meant to contain the property
* @Arg2: Property Name that should be present in the Arg1
* RET: Returns true if property exists and the value is not null
*      Else returns false
* */
var propertyExists = function(object, propertyName) {
    /* Check Property Existence */
    if(object.hasOwnProperty(propertyName)) {
        /* Check property is defined and not null */
        if(object[propertyName] != undefined && object[propertyName] != null) {
            return true;
        }
    }
    return false;
};


/*Export the relevant methods*/
module.exports = {
  'exists': propertyExists
};

