# Ķīmijas laboratorijas uzskaites sistēmas API

## 1. Pievienot datnes kā datu avotu lasīšanai

Servera programmēšana:

- izmaina funkcijas `vielas` un `viela_id`, lai tās ņemtu datus no json datnēm, kas atrodas `dati` mapē.
- pievieno route `/api/v1/viela`, kas pieņem POST pieprasījumus datu saņemšanai un pierakstīšanai

## 2. Patstāvīgs darbs

- izveido funkcijas `inventars` un `inventars_id`, lai tās ņemtu datus no json datnēm, kas atrodas `dati` mapē
- pievieno route `/api/v1/inventars`, kas pieņem POST pieprasījumus datu saņemšanai un pierakstīšanai
