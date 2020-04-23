Funkcja fetch() wysyła zapytanie do wskazanego zasobu i oczekuje na odpowiedź.

Jest to rozwiązanie asynchroniczne więc idealnie pasuje do obietnic.

fetch() zwraca obietnicę. W przypadku rozwiązania obietnicy jest wywoływana funkcja przekazana w .then().

Jest to obiekt Response, który należy przekształcić w odpowiedni format. 

W naszym przypadku jest to tekst (o czy powinniśmy dowiedzieć się z dokumentacji) dlatego używamy metody .text(), która zwraca obietnicę.

W przypadku błędu zostanie wywołana funkcja z .catch.

Metoda .finally jest częścią implementacji obietnicy. 
Jest uruchamiana niezależnie od tego czy obietnica jest odrzucona czy spełniona
Jest wykorzystywana do wykonywania czynności niezależnych od odpowiedzi. Np. do ukrywania paska wczytywania tzw. loader-a.