{
    {
        {
            {
                var sera = "será???" // essa variavel é visivel fora do bloco pq não é uma function
                console.log(sera);
            }
        }
    }
}
console.log(sera);


function teste(){
    var local = 123 // essa variavel não é visivel fora do bloco pq ela é uma function
    console.log(local);
}

teste()