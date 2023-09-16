import java.util.Scanner;

public class jacolbiajm {
    public static void main(String[]args){

    Scanner sc = new Scanner (System.in);
    int i = 5;
    double total = 0;   
    char ans;
        
    do {
        while(i>1){
            System.out.print("\n\nENTER HOURS WORKED (-1 TO END): ");
            int hour = sc.nextInt();
            if (hour==-1){
                break;
            }
            System.out.print("ENTER HOURLY RATE OF THE WORKER ($00.00): ");
            double rate = sc.nextDouble();
            double salary = hour * rate;
            if (hour <= 40) {
                System.out.printf("THE SALARY IS: $%.2f", salary);
            }
            if (hour > 40){
                double so1 = hour-40;
                double so2 = so1 * (rate/2);
                salary = salary + so2;
                System.out.printf("THE SALARY IS: $%.2f", salary);
            }
            total += salary;
        }
        System.out.printf("\nThe total salary of all employees: $%.2f", total);
        System.out.print("\nTHANK YOU FOR USING THE SYSTEM");
        System.out.print("\n\nDo you want to continue? Y/N:");
        ans = sc.next().charAt(0);
    }while((ans == 'Y')||(ans == 'y'));
    System.out.print("Programed by: Jacolbia");
    sc.close();
    }
}