self.addEventListener('fetch', function(event) {
 console.log('hi');
 console.log(event.request);
});

//console.log('yo');