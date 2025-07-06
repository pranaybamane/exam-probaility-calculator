import 'dart:html';

void main() {
 querySelector('#submit').onClick.listen(calculate);
}

void calculate(Event e) {
 String name = (querySelector('#name') as InputElement).value;
 querySelector('#result').text = 'Congrats $name, you passed!';
}
