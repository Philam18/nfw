export class Util
{
    public static objectDeepMerge(a : Object, b : Object) : Object
    {
        return Object.assign({},a,b);
    }
}