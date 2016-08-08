//extend 只能有一个 implement 可以有多个
public class Dog extends Canine implements Pet{
    public void beFriendly(){

    }
    public void play(){

    }

    public void roam(){
        super.roam();//调用父版的方法
    }
    public void eat(){}
}
