import iphone.Iphone;

public class App {
    public static void main(String[] args) throws Exception {

        Iphone mobilePhone = new Iphone();

        
        System.out.println("Reprodutor Músical: ");
        System.out.println(" ");

        mobilePhone.play();
        mobilePhone.pause();
        mobilePhone.selectMusic();

        System.out.println("_____________________________");
        System.out.println(" ");

        System.out.println("Aparelho Telefônico: ");
        System.out.println(" ");

        mobilePhone.call();
        mobilePhone.answer();
        mobilePhone.startVoiceMail();

        System.out.println("_____________________________");
        System.out.println(" ");

        System.out.println("Navegador Da Internet: ");
        System.out.println(" ");

        mobilePhone.displayPage();
        mobilePhone.addNewTab();
        mobilePhone.refreshPage();

        System.out.println(" ");  

    }

}