package iphone;

import iphone.functions.*;

public class Iphone implements MusicPlayer, PhoneSystem, WebBrowser {

    public void play() {
        System.out.println("Tocando....");
    }

    public void pause() {
        System.out.println("Pausado!");
    }

    public void selectMusic() {
        System.out.println("Música selecionada");
    }

    public void displayPage() {
        System.out.println("Exibindo página...");
    }

    public void addNewTab() {
        System.out.println("Nova aba aberta!");
    }

    public void refreshPage() {
        System.out.println("Page refreshed.");
    }

    public void call() {
        System.out.println("Chamando...");
    }

    public void answer() {
        System.out.println("Atendendo...");
    }

    public void startVoiceMail() {
        System.out.println("Caixa de correio iniciada!");
    }
}
