const quickTips = [
  {
    question:
      "왜 Java에서 boolean은 true 또는 false 두 개의 값만 가지는데, 차지하는 비용은 1 byte인가요?",
    answer:
      "1bit가 아닌 8bit = 1byte를 차지하는 이유는 메모리 접근을 1byte씩 하고, 실제 하드웨어도 1byte 단위를 생각해 만들어졌어요. 아주 옛날이라면 모르겠지만, 지금은 1bit에 접근하는게 코스트가 더 많이 듭니다!",
    hashtags: "#Java #data-type #boolean",
  },

  {
    question: "Github 계정을 바꾸어 로그인하고 싶어요.",
    answer:
      "설정 > '자격 증명 관리자' 검색 > Windows 자격 증명에서 github 관련 내용을 삭제합니다. 그 뒤에 재로그인해 보세요!",
    hashtags: "#Github #credential",
  },

  {
    question: "Kotlin에서 IntArray와 Array<Int>가 왜 다르게 취급되나요?",
    answer:
      "둘의 차이는 int를 기본형으로 사용하냐, 참조형으로 사용하냐의 차이에요. Array<Int>의 항에는 null이 들어갈 수 있어요! Java로 비유한다면 IntArray는 int[], Array<Int>는 Integer[]라고 볼 수 있죠!",
    hashtags: "#Kotlin #data-type #IntArray #Array<Int> #Java",
    "related-tips": "Java에서 Integer와 int의 차이를 알려주세요.",
  },

  {
    question: "Java에서 int와 Integer의 차이를 알려주세요.",
    answer:
      "int는 기본형(primitive type)으로 null을 집어넣을 수 없어요! 하지만 Integer는 참조형(wrapper class)이라서, null을 담을 수 있어요.",
    hashtags: "#Java #data-type #int #primitive-type #Integer #wrapper-class",
  },

  {
    question: "Github Issues로 프로젝트를 관리하고 싶은데, 설정 어디에 있죠?",
    answer: "Settings > General > Features에서 Issues 체크박스를 체크하세요!",
    hashtags: "#Github #Issues #where-it-is",
  },

  {
    question: "Github Wiki 설정을 켜려면 어디로 가야 하죠?",
    answer:
      "Settings > General > Features에서 Wikis 체크박스를 체크하시면 됩니다.",
    hashtags: "#Github #Wikis #where-it-is",
  },

  {
    question: "Github 브랜치를 새로 생성하고 싶어요!",
    answer:
      "Github 레포지토리의 Code 탭에서, 브랜치 드롭다운 메뉴를 클릭 > View All Branches > New Branch를 누르세요.",
    hashtags: "#Github #Branches #where-it-is",
    "related-tips": "Github에서 default 브랜치를 변경하려면?",
  },

  {
    question: "Github에서 default 브랜치를 변경하려면?",
    answer:
      "Settings > General > Default branch의 Switch to another branch 버튼을 눌러, 새 default 브랜치를 고르세요.",
    hashtags: "#Github #Branches #default-branch #where-it-is",
  },

  {
    question: "터미널에서 브랜치 변경하는 법",
    answer:
      "프로젝트 폴더 우클릭 > Git Bash Here (전 Git Bash를 씁니다) 로 터미널 열기 >  Settings > General > Default branch의 Switch to another branch 버튼을 눌러, 새 default 브랜치를 고르세요.",
    hashtags: "#Github #Branches #default-branch #where-it-is",
  },

  {
    question:
      "Github 웹페이지에서 추가한 브랜치가 VS Code에서 확인되지 않아요!",
    answer:
      "Source Control > Source Control Repositories 가 켜져 있는지 확인해 보세요. 켜져 있다면, 브랜치 이름을 눌러 local 및 remote 브랜치들을 확인할 수 있습니다.",
    hashtags: "#Github #git-fetch",
  },

  {
    question:
      "Github 웹페이지에서 추가한 브랜치가 VS Code에서 확인되지 않아요!",
    answer:
      "Source Control > Source Control Repositories 가 켜져 있는지 확인해 보세요. 켜져 있다면, 브랜치 이름을 눌러 local 및 remote 브랜치들을 확인할 수 있습니다.",
    hashtags: "#Github #git-fetch",
  },

  {
    question: "Java에서 String을 char 단위로 끊어 확인하는 법?",
    answer:
      "1) String.charAt(인덱스); 2) String.toCharArray(); 를 사용 가능하다. cf) Kotlin은 for (c in string) { ... } 같이 작성이 가능하지만, Java는 타입 문제가 일어난다.",
    hashtags: "#Java #type-casting #data-type #String #char",
    createdAt: "2024-08-08",
  },

  {
    question: "JCF? 자바 컬렉션 프레임워크?",
    answer:
      "Collection: List(LinkedList, Stack, Vector, ArrayList), Set(HashSet, SortedSet(TreeSet)) Map: Hashtable, HashMap, SortedMap (TreeMap)",
    hashtags: "#Java #data-structure #JCF",
    createdAt: "2024-08-08",
  },

  {
    question: "Java에서 Stack 사용하기",
    answer:
      '프로그래머스(OpenJDK 14.0.2) 기준 import java.util.Stack; 을 해줘야 하네요. 귀찮다. Stack<String> stack = new Stack<>(); stack.push("first"); System.out.println("삽입 : " + stack.peek() ); for( String item : stack ) {System.out.println(item);} while( !stack.isEmpty() ) {  System.out.println( stack.pop() ); } System.out.println("Stack이 비었습니까 : " + stack.isEmpty());',
    hashtags: "#Java #data-structure #Stack",
    createdAt: "2024-08-08",
  },

  {
    question: "Wrapper Class",
    answer: "Character, Integer는 char, int와 달리 끝까지 적어줘요!",
    hashtags: "#Java #data-type #wrapper-class #Character #Integer",
    createdAt: "2024-08-08",
  },

  {
    question: "Stack<Integer>를 IntArray로 바꾸고 싶어요!",
    answer:
      "방법 1) Stack<Integer> > Object[] > int[]\n" +
      "Object[] objArray = stack.toArray();\n" +
      "int[] intArray = new int[objArray.length];\n" +
      "for(int i=0; i<objArray.length; i++)\n" +
      "   {intArray[i] = (Integer) objArray[i];\n" +
      "방법2: Stream API 사용하기 \n" +
      "int[] intArray = stack.stream().mapToInt(Integer::intValue).toArray();",
    hashtags: "#Java #type-casting #Stack #wrapper-class",
    createdAt: "2024-08-09",
    "related-tips": "stream()을 막 남용해도 될까요?",
  },

  {
    question: "stream()이 뭐에요?",
    answer: "람다식 쓰기 전 몸풀기에여!",
    hashtags: "#Java #stream #lambda",
    createdAt: "2024-08-09",
    revisedAt: "",
    "related-tips": "Stack<Integer>를 IntArray로 바꾸고 싶어요!",
  },

  {
    question: "Java에서 Queue 쓰는 법!",
    answer:
      "Queue<자료형> 변수명 = new LinkedList<>(); Queue 변수명 = new LinkedList();",
    hashtags: "#Java #queue #LinkedList",
    createdAt: "2024-08-09",
    revisedAt: "",
    "related-tips": "Stack<Integer>를 IntArray로 바꾸고 싶어요!",
  },

  {
    question: "Java에서 HashSet 쓰는 법!",
    answer:
      "HashSet<Wrapper Class Type> 변수명  = new HashSet<Wrapper Class Type, 생략가능>();\n\n" +
      "(예시)\n" +
      "HashSet<String> set  = new HashSet<>();\n" +
      'set.add("hello"); //set에 hello 추가\n' +
      'set.add("world"); //set에 world 추가\n' +
      "for (String i: set) {\n" +
      "    System.out.println(i); } //hello, world 출력\n" +
      'set.contains("hello") //hello가 들어 있으므로 true\n' +
      'set.remove("hello") //set에서 hello 삭제\n' +
      "set.size(); //1\n" +
      "set.remove(); //들어있는 항 다 삭제\n",

    hashtags: "#Java #data-type #HashSet",
    createdAt: "2024-08-09",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "Java에서 HashMap 쓰는 법!",
    answer:
      "HashMap<String, Integer> map1 = new HashMap<String,Integer>();//HashMap생성" +
      "HashMap<String,Integer> map2 = new HashMap<>(); //타입 파라미터 생략" +
      "HashMap<String,Integer> map3 = new HashMap<>(10);//초기 용량 설정" +
      "map.add(...) 안되고 map.put(...) 써야 함." +
      "map.containsKey(key) + map.replace(key, map.get(key) + ...) 조합 코테 할 때 유용하게 사용 중.",

    hashtags: "#Java #data-type #HashMap",
    createdAt: "2024-08-09",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "String[] numString = new String[]; 이 안되는 이유",
    answer: "Array라서 항 갯수를 지정해 주어야 해요!",
    hashtags: "#Java #data-type #Array",
    createdAt: "2024-08-09",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "int[]를 사전순으로 정렬하려면? String[]으로 꼭 바꿔야 하나?",
    answer:
      "넵.\n" +
      "import java.util.Arrays;\n" +
      "String[] stringArray = Arrays.stream(numbers)    // int[] -> IntStream\n" +
      "                    .mapToObj(String::valueOf)  // IntStream -> Stream<String>\n" +
      "                    .toArray(String[]::new);    // Stream<String> -> String[]\n" +
      "Arrays.sort(stringArray);",

    hashtags: "#Java #sort #data-type",
    createdAt: "2024-08-10",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "내림차순 정렬하기",
    answer:
      "스트림API 와 람다식을 이용해 구현 또는 Collections 메서드 사용\n" +
      "Arrays.sort(tmp, (a, b) -> b - a); Arrays.sort(tmpInts, (a, b) -> b.compareTo(a)); Arrays.sort(tmpInts, Comparator.reverseOrder());",
    hashtags: "#Java #sort #data-type",
    createdAt: "2024-08-10",
    revisedAt: "",
    "related-tips":
      "int[]를 사전순으로 정렬하려면? String[]으로 꼭 바꿔야 하나?",
  },

  {
    question: "Kotlin에서의 when 문이 java에선 뭐였지!",
    answer:
      "switch(...) {case 1: ...; break; case 2: ...; break; ... default: ...;\n 하지만 switch문은 when과는 달리 범위 지정 안됨",
    hashtags: "#Java #switch #Kotlin # when",
    createdAt: "2024-08-10",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "Java에서는 max(a, b, c) 이렇게 못 적나 보네!",
    answer: "Math.max(num1, Math.max(num2, num3) 는 가능하다.",
    hashtags: "#Java #switch #Kotlin # when",
    createdAt: "2024-08-10",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "Scanner vs BufferedReader",
    answer:
      "입력값을 파싱할 때 속도 최적화를 위해서는 BufferedReader가 낫다고 한다.\n" +
      "Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다.\n" +
      "BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.",
    hashtags: "#Java #System.in #Scanner #BufferedReader",
    createdAt: "2024-08-10",
    revisedAt: "2024-08-11",
    "related-tips": "",
  },

  {
    question: "왜 Scanner보다 BufferedReader가 빠른지 간단히 설명해 보자.",
    answer: "",
    hashtags: "#Java #System.in #Scanner #BufferedReader",
    createdAt: "2024-08-11",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question:
      "SELECT * FROM TABLE GROUP BY COLUMN 을 했을 때 SQL Error [1055] [42000] 발생!",
    answer: "사용 중인 MySQL 버전이 8.0 ",
    hashtags: "#SQL #MySQL #forgiving_mode",
    createdAt: "2024-08-28",
    revisedAt: "",
    "related-tips": "",
  },

  {
    question: "IF(1 + 2 = 3, 'aaa', 'bbb') SQL Error [1064] [42000] 발생!",
    answer: "",
    hashtags: "#SQL #MySQL",
    createdAt: "2024-08-28",
    revisedAt: "",
    "related-tips": "",
  },
];

module.exports = quickTips; // quickTips를 모듈로 내보냄
