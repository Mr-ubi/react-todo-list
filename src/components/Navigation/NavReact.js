import React, { Component } from 'react'

export default class NavReact extends Component {
    render() {
        return (
        <div class="container">
        <div class="row">
            <div class="col">
                <h1>Deklaratywny</h1><br /><br /><br />
                React znacznie ułatwia tworzenie interaktywnych UI. Zaprojektuj proste widoki obsługujące stan aplikacji, a React zajmie się sprawną aktualizacją i ponownym renderowaniem odpowiednich komponentów.
                Deklaratywne widoki sprawiają, że kod staje się bardziej przewidywalny i łatwiejszy do debugowania.
            </div>
            <div class="col">
                <h1>Oparty na komponentach</h1><br />
                Twórz izolowane komponenty, które zarządzają własnym stanem, a później łącz je w złożony UI.
                Jako że logika komponentów pisana jest w JavaScripcie, a nie w szablonach, przekazywanie skomplikowanych struktur danych i przechowywanie stanu aplikacji poza drzewem DOM staje się łatwiejsze.
            </div>
            <div class="col">
                <h1>Naucz się raz, używaj wszędzie</h1><br />
                React działa w izolacji od reszty stosu technologicznego, dzięki czemu możesz w nim tworzyć nowe funkcjonalności, bez konieczności przepisywania istniejącego kodu.
                React potrafi również renderować po stronie serwera przy użyciu Node, a także napędzać aplikacje mobilne za pomocą React Native.
            </div>
        </div>
        </div>
        )
    }
}
