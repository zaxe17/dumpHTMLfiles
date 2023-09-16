import java.util.Scanner;

public class jacolbia {
   
    public static void main(String[]args){

    Scanner sc = new Scanner (System.in);
    int i = 5;
    double total = 0;
    char ans;

    do {
        while(i>1){
            System.out.print("\n\nENTER SALES IN DOLLAR (-1 TO END): ");
            double sales = sc.nextDouble();
        if (sales==-1){
            break;
            }
            double salary = (200 + sales * 0.09);
            total += salary;
            System.out.printf("Salary: $%.2f", salary);
        }
        System.out.printf("\nThe total salary for the week: $%.2f", total);
        System.out.print("\nGOOD DAY!!! THANK YOU FOR USING THE SYSTEM");
        System.out.print("\n\nDo you want to continue? Y/N:");
        ans = sc.next().charAt(0);
    }while((ans == 'Y')||(ans == 'y'));
    System.out.print("Programed by: Jacolbia");
    sc.close();
    }
}