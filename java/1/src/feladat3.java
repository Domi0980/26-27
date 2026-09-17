import java.util.Scanner;
public class feladat3 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Add meg a neved: ");
        String nev = sc.next();
        System.out.print("Add meg az eletkorod: ");
        int kor = sc.nextInt();

        System.out.print("Neved: " +nev);
        System.out.print("\nkorod: " +kor);
    }
}