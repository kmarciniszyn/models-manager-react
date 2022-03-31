# AI models manager

Do stworzenia aplikacji wykorzystano framework JavaScript - React.
Aplikacja służy do zarządzania modelami AI. 
GUI zaprojektowano tak, aby był prosty w obsłudze oraz intuicyjny. Zadbano również o responsywność.

## Funkcjonalności

W aplikacji zapewniono następujące funkcjonalności:

### Wyświetlenie modeli wraz ze stanami

W celu wyświetlenia modeli należy otworzyć zakładkę *models* dostępną w pasku nawigacji znajdującym się na górze strony, lista modeli znajduje się w sekcji *models list*. Podczas ładowania danych modeli wyświetlana jest informacja o ładowaniu. Po poprawnym załadowaniu modeli wyświetlana jest lista. Każdy element listy zawiera informacje o nazwie modelu oraz jego stanie, jak również dostępne są dwa przyciski jeden do [wyświetlenia raportu](###wyświetlenie-raportu) oraz drugi do [usunięcia modelu](###usunięcie-modelu). W przypadku niepowodzenia przy pobraniu danych modeli w miejscu listy powinien pojawić się komunikat o błędzie podczas ładowania danych.

### Dodawanie nowego modelu z monitorowaniem stanu

Opcja dodawania nowego modelu znajduje się w zakładce *models* w sekcji *add model*. Aby dodać model należy w polu oznaczonym *name* wpisać nazwę modelu i nacisnąć przycisk zatwierdzający *submit*. (Pozostałym zmiennym wartości przypisywane są domyślnie, następnie dane te wraz z nazwą zapisywane są w pliku o rozszerzeniu *yml*.) Stan wyświetlany jest na liście modeli w zakładce *models* w sekcji *models list*.

### Wyświetlenie raportu

Aby wyświetlić raport dla danego modelu należy wybrać zakładkę *models*, a następnie nacisnąć przycisk *report* dla danego modelu w elemencie listy. Użytkownik zostaje przekierowany do podstrony, na której wyświetlony jest przykładowy raport.

### Pobranie raportu

Opcja pobrania raportu znajduję się na podstronie z [wyświetlonym raportem](###wyświetlanie-raportu). Po naciśnięciu przycisku pobierania raportu znajdującego się w prawym górnym rogu pobierany jest plik o rozszerzeniu *html* zawierający przykładowy raport.

### Usunięcie modelu

Aby usunąć model należy wybrać zakładkę *models*, a następnie nacisnąć przycisk *remove* dla danego modelu w elemencie listy. Następnie wyświetli się komunikat, czy użytkownik jest pewny, że chce usunąć wskazany model (nazwa modelu). Użytkownik ma dwie opcje może anulować - przycisk *cancel* lub zatwierdzić - przycisk *ok*.

### Wywołanie predykcji - obliczenie prawdopodobieństwa fraudu

Opcja ta dostępna jest w zakładce *calculate frauds*, która znajduje się w pasku nawigacji. Do obliczenia prawdopodobieństwa fraudu w kontekście danego modelu należy wybrać model i zatwierdzić przyciskiem *submit*. Wynik wyświetlany jest w górnej części sekcji *fraud probability*.

### Zalogowanie użytkownika

Strona logowania jest pierwszą stroną wyświetlaną użytkownikowi. Aby mógł korzystać z aplikacji musi się uwierzytelnić. W tym celu należy podać identyfikator użytkownika oraz hasło. Pola te są wymagane. Po poprawnym zalogowaniu użytkownik zostaje przekierowany na stronę *models*.

### Wylogowanie użytkownika

Aby się wylogować należy wybrać opcję *log out* dostępną po prawej stronie paska nawigacji.

## Technologie

Do zbudowania poniższeej aplikacji zastosowano technologie:

### React

### Create-react-app

### Styled components

### Styled normalize

### React-redux and reduxjs/toolkit

Użyto do zarządzania stanem aplikacji. Stan aplikacji zawiera informacje m.in. takie jak lista modeli oraz informacja o zalogowaniu użytkownika.

### Redax-saga

Utworzono dwie sagi. Jedną do obsługi pobierania modeli oraz ich stanów oraz drugą do obsługi pobierania raportu. Zamieszczono je w głównej sadze *root saga*, którą podłączono do stora.

### React-router-dom

### Axios

Użyto do komunikacji z serwerem. 

### Js-yaml

Bibliotekę tą wykorzystano do zmiany formatu danych na *yml* - wykorzystano funkcję `dump`. Jest to potrzebne podczas [dodawania nowego modelu](###dodawanie-nowego-modelu-z-monitorowaniem-stanu).

## Dostępne skrypty

W folderze projektu można uruchomić:

### `npm start`

Uruchamia aplikację w trybie deweloperskim.
Należy otworzyć [http://localhost:3000](http://localhost:3000), aby wyświetlić projekt w przeglądarce.

Strona zostanie przeładowana po wprowadzeniu zmian.
Błędy widoczne są w konsoli.
