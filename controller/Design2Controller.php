<?php

require_once '../repository/UserRepository.php';
class Design2Controller
{
    /**
     * Die index Funktion des DefaultControllers sollte in jedem Projekt
     * existieren, da diese ausgeführt wird, falls die URI des Requests leer
     * ist. (z.B. http://my-project.local/). Weshalb das so ist, ist und wann
     * welcher Controller und welche Methode aufgerufen wird, ist im Dispatcher
     * beschrieben.
     */
    public function index()
    {
        // In diesem Fall möchten wir dem Benutzer die View mit dem Namen
        //   "default_index" rendern. Wie das genau funktioniert, ist in der
        //   View Klasse beschrieben.
        $view = new View('default_index2');
        $view->title = 'Startseite';
        $view->heading = 'Startseite';
        $view->display();
    }

    public function details()
    {
        $view = new View('details');
        $view->display();
    }
}
