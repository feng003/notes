class Dog
{
    String name;
    public static void main(String[] args) {
        //Dog object
        Dog dog1 = new Dog();
        dog1.bark();
        dog1.name = "Bart";

        //Dog array
        Dog[] myDogs = new Dog[5];
        myDogs[0] = new Dog();
        myDogs[1] = new Dog();
        myDogs[2] = new Dog();
        myDogs[3] = dog1;
        myDogs[4] = dog1;
        //array fuzhi
        myDogs[0].name = "fred";
        myDogs[1].name = "marge";
        myDogs[2].name = "dogs";

        System.out.print("last dog's name is ");
        System.out.println(myDogs[3].name);

        int x = 0;
        while (x < myDogs.length) {
            myDogs[x].bark();
            x = x  + 1;
        }
    }
    public void bark()
    {
        System.out.println(name + " say Ruff!");
    }

    public void eat(){}

}
