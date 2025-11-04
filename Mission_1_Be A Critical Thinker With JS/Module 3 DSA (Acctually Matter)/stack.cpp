#include <bits/stdc++.h>
using namespace std;

class myStack
{
private:
    vector<int> v;

public:
    void push(int val)
    {
        v.push_back(val);
    }

    void pop()
    {
        if (!v.empty())
            v.pop_back();
    }

    int top()
    {
        return v.back();
    }

    bool isEmpty()
    {
        return v.empty(); 
    }
};

int main()
{
    myStack st;
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        st.push(x);
    }

    while (!st.isEmpty())
    {
        cout << st.top() << " ";
        st.pop();
    }
    cout << endl;  // Optional: cleaner output

    return 0;
}