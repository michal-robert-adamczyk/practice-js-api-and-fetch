Funkcja fetch() wysyła zapytanie do wskazanego zasobu i oczekuje na odpowiedź.

Jest to rozwiązanie asynchroniczne więc idealnie pasuje do obietnic.

fetch() zwraca obietnicę. W przypadku rozwiązania obietnicy jest wywoływana funkcja przekazana w .then().

Jest to obiekt Response, który należy przekształcić w odpowiedni format. 

W naszym przypadku jest to tekst (o czy powinniśmy dowiedzieć się z dokumentacji) dlatego używamy metody .text(), która zwraca obietnicę.

W przypadku błędu zostanie wywołana funkcja z .catch.

Metoda .finally jest częścią implementacji obietnicy. 
Jest uruchamiana niezależnie od tego czy obietnica jest odrzucona czy spełniona
Jest wykorzystywana do wykonywania czynności niezależnych od odpowiedzi. Np. do ukrywania paska wczytywania tzw. loader-a.


Gdy otrzymamy kod błędu 404 (zasób nie istnieje), to .catch nie zostanie wywołany.
Tutaj trzeba dodatkowo rozbudować obsługę API.
Sprawdzam właściwość .ok dla obiektu Response przechowywanego w zmiennej resp.

Jeśli jest ona ustawiona na true to konwertujemy odpowiedź na dane tekstowe. 

Jeśli jest ustawiona na false to zwracamy obietnicę ze stanem odrzuconym. 

W takim wypadku funkcja z .catch zostanie uruchomiona na czym nam zależało.