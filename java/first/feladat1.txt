import java.util.Scanner;
public class feladat1 {

    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);

        System.out.print("Adj meg egy számot: ");
        int szam1 = sc.nextInt();
        System.out.print("Adj meg egy számot: ");
        int szam2 = sc.nextInt();
        System.out.print("Adj meg egy számot: ");
        int szam3 = sc.nextInt();
        System.out.print("Adj meg egy számot: ");
        int szam4 = sc.nextInt();
        System.out.print("Adj meg egy számot: ");
        int szam5 = sc.nextInt();

        int eredmeny = szam1+szam2+szam3+szam4+szam5;

        System.out.print("A megadott számok összege: " + eredmeny);








    }
}
