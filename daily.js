<script>
    var request = require("request");

    var options = { 
        method: 'GET',
        url: 'https://qa-ks.pluot.blue/api/v1/rooms',
        headers: { authorization: `Bearer 419877a166bba70ad49b2a42b5b103d9c71a1abadb1e25d52926ad4b9883ad19` } 
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
</script>