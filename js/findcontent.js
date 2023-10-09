
// searches current page for input fields with matching id's and fills content
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            //content list of common input id matches - add element ID's to create new matches
            if (document.getElementById("FirstName") != null)       { document.getElementById("FirstName").value = request.first };
            if (document.getElementById("LastName") != null)        { document.getElementById("LastName").value = request.last };
            if (document.getElementById("first_name") != null)      { document.getElementById("first_name").value = request.first };
            if (document.getElementById("last_name") != null)       { document.getElementById("last_name").value = request.last };
            if (document.getElementById("name") != null)            { document.getElementById("name").value = request.first + " " + request.last }; //merge requests to change output

            if (document.getElementById("email") != null)           { document.getElementById("email").value = request.email };

            if (document.getElementById("phone") != null)           { document.getElementById("phone").value = request.tele };
            if (document.getElementById("tele") != null)            { document.getElementById("tele").value = request.tele };

            if (document.getElementById("address") != null)         { document.getElementById("address").value = request.address };
            if (document.getElementById("AddressLine1") != null)    { document.getElementById("AddressLine1").value = request.address };

            if (document.getElementById("city") != null)            { document.getElementById("city").value = request.city };
            if (document.getElementById("City") != null)            { document.getElementById("City").value = request.city };

            if (document.getElementById("zipcode") != null)         { document.getElementById("zipcode").value = request.zipcode };

        } catch (error){
            console.log(error)
            sendResponse({status: "error occurred"})
        }
        console.log("Fire!")
        return true;
    }
)