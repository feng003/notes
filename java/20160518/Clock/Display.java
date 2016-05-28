package Clock;

public  class Display{
    private value = 0;
    private limit = 0;

    public void increase(){
        while (true) {
            value++;
            if(value > limit){
                value = 0;
            }
        }
    }

    public int getValue(){
        return value;
    }
}
