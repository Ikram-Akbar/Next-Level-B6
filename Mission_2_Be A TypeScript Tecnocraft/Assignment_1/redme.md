# TypeScript সংক্ষেপে

## ১. Interface ও Type-এর পার্থক্য

| বৈশিষ্ট্য | Interface | Type |
|----------|-----------|------|
| ব্যবহার | শুধু object shape describe করতে পারে | যেকোনো টাইপ (union, tuple, primitive) হতে পারে |
| Declaration Merging | করা যায় (একই নামে আবার লেখা যায়) | করা যায় না |
| Extending | সহজে extends করা যায় | intersection (`&`) দিয়ে করা যায় |
| Class Implementation | class implements করতে পারে | class implements করতে পারে না |

## ২. any, unknown, never টাইপের পার্থক্য

- **any**: যেকোনো কিছু করা যায়, টাইপ চেক বন্ধ হয়ে যায় (কম নিরাপদ)  
- **unknown**: কিছুই জানি না, কিন্তু কিছু করার আগে টাইপ চেক/ন্যারো করতে হবে (নিরাপদ)  
- **never**: কখনো কোনো মান থাকে না (যেমন: error throw, infinite loop)  

