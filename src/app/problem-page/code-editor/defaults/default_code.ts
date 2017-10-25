export class default_code {
  private static _c_value: string = '#include<stdio.h>\nvoid main(void)\n{\n  printf("Hello world");\n  return;\n}';

  private static _cpp_value: string = '#include<iostream>\nusing namespace std;\nint main() {\n  return 0;\n}';

  private static _java_value: string = `public class CodeNow {
  public static void main(String [] args) {
    System.out.println("Hello world");
  }
}`;

  private static _python_value: string = `#code here`;

  static get(language: string): string {
    switch(language) {
      case 'c':
        return this._c_value;
      case 'cpp':
        return this._cpp_value;
      case 'java':
        return this._java_value;
      case 'python':
        return this._python_value;
    }
  }
}
