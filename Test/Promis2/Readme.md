Obietnice powstały w celu usprawnienia pisania kodu asynchronicznego.

Przy tworzeniu takiej obietnicy definujemy parametr, ktory jest funkcją.

Wspomniana funkcja przyjmuje dodatkowo dwa parametry, któe zwyczajowo noszą nazwy resolve oraz reject.

reject i resolve to również funkcje, które są wywoływane w odpowiendim momencie. 

resolve jest uruchamiane w przypadku prawidłowego rozwiązania i do niej jest przekazywany wynik.

reject wywołujemy gdy pojawi się błąd, tym razem przekazujemy treść błędu.

Ponieważ te funkcje są wywoływane w różnych momentach to obietnice posiadają trzy stany

- rozwiązana (ang. resolved)
Czyli wtedy kiedy nasza obietnica zosatnie spełniona
- odrzucona (ang. rejected)
wtedy kiedy pojawił się problem podczas wykonywania kodu
- oczekująca (ang. pending)
zainicjowany proces nie zostal zakończony - jest w trakcie

W momencie kiedy nasza obietnica zostanie spełniona to zostanie wywołana funkcja przekazana w then

Funkcja ta w parametrze resp otrzyma wynik dzialania naszej obietnicy. 

W przypadku błędu zosatnie wywołana funkcja przekazana do catch i analogicznie w parametrze err otrzyma ona informacje o błędzie. 


Tutaj użyłem funkcji strzałkowej, która jest wygodniejsza i bardziej czytelna.

Dodatkowo obsługę obietnicy (than oraz catch) połączyłem w jeden łańcuch.
