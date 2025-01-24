// Create web server and listen on port 3000
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head><title>Comments</title></head><body>');
    res.write('<h1>Comments</h1>');
    res.write('<form action="/comment" method="post">');
    res.write('<textarea name="comment" cols="60" rows="4"></textarea><br>');
    res.write('<input type="submit" value="Submit Comment">');
    res.write('</form>');
    res.write('</body></html>');
    res.end();
}).listen(3000);
