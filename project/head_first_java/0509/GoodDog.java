class GoodDog{
    private int size;
    public int getSize(){
        return size;
    }
    public void setSize(int s){
        size = s;
    }

    void bark(){
        if(size>80){
            System.out.print("wooof");
        }else if(size>100){
            System.out.print("Ruff");
        }else{
            System.out.print("Yip");
        }
    }
}
