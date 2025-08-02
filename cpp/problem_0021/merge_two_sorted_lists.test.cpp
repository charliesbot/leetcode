#define CATCH_CONFIG_MAIN
#include "../catch_amalgamated.hpp"
#include "merge_two_sorted_lists.cpp"

// Helper function to create a linked list from vector
ListNode* createList(const vector<int>& values) {
    if (values.empty()) return nullptr;
    
    ListNode* head = new ListNode(values[0]);
    ListNode* current = head;
    
    for (size_t i = 1; i < values.size(); i++) {
        current->next = new ListNode(values[i]);
        current = current->next;
    }
    
    return head;
}

// Helper function to convert linked list to vector for easy comparison
vector<int> listToVector(ListNode* head) {
    vector<int> result;
    while (head) {
        result.push_back(head->val);
        head = head->next;
    }
    return result;
}

// Helper function to delete a linked list to prevent memory leaks
void deleteList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        delete temp;
    }
}

TEST_CASE("Merge Two Sorted Lists", "[merge_two_sorted_lists]") {
    Solution solution;

    SECTION("Basic examples from problem statement") {
        // Example 1: [1,2,4] and [1,3,4] -> [1,1,2,3,4,4]
        ListNode* list1 = createList({1, 2, 4});
        ListNode* list2 = createList({1, 3, 4});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 1, 2, 3, 4, 4};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Both lists empty") {
        // Example 2: [] and [] -> []
        ListNode* list1 = nullptr;
        ListNode* list2 = nullptr;
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        REQUIRE(result == nullptr);
    }

    SECTION("One list empty, other non-empty") {
        // Example 3: [] and [0] -> [0]
        ListNode* list1 = nullptr;
        ListNode* list2 = createList({0});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {0};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);

        // Reverse case: [5] and [] -> [5]
        list1 = createList({5});
        list2 = nullptr;
        result = solution.mergeTwoLists(list1, list2);
        
        expected = {5};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Single element lists") {
        ListNode* list1 = createList({1});
        ListNode* list2 = createList({2});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 2};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);

        // Reverse order
        list1 = createList({3});
        list2 = createList({1});
        result = solution.mergeTwoLists(list1, list2);
        
        expected = {1, 3};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);

        // Equal elements
        list1 = createList({2});
        list2 = createList({2});
        result = solution.mergeTwoLists(list1, list2);
        
        expected = {2, 2};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Different lengths") {
        // First list longer
        ListNode* list1 = createList({1, 3, 5, 7, 9});
        ListNode* list2 = createList({2, 4});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 2, 3, 4, 5, 7, 9};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);

        // Second list longer
        list1 = createList({1, 5});
        list2 = createList({2, 3, 4, 6, 7});
        result = solution.mergeTwoLists(list1, list2);
        
        expected = {1, 2, 3, 4, 5, 6, 7};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("All elements from first list smaller") {
        ListNode* list1 = createList({1, 2, 3});
        ListNode* list2 = createList({4, 5, 6});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 2, 3, 4, 5, 6};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("All elements from second list smaller") {
        ListNode* list1 = createList({7, 8, 9});
        ListNode* list2 = createList({1, 2, 3});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 2, 3, 7, 8, 9};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Identical lists") {
        ListNode* list1 = createList({1, 2, 3});
        ListNode* list2 = createList({1, 2, 3});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {1, 1, 2, 2, 3, 3};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Negative numbers") {
        ListNode* list1 = createList({-10, -5, 0});
        ListNode* list2 = createList({-8, -3, 2});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {-10, -8, -5, -3, 0, 2};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Mixed positive and negative numbers") {
        ListNode* list1 = createList({-100, -50, 50});
        ListNode* list2 = createList({-75, 0, 100});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {-100, -75, -50, 0, 50, 100};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Boundary values") {
        ListNode* list1 = createList({-100, 0, 100});
        ListNode* list2 = createList({-100, 0, 100});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {-100, -100, 0, 0, 100, 100};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Large equal elements") {
        ListNode* list1 = createList({5, 5, 5});
        ListNode* list2 = createList({5, 5});
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected = {5, 5, 5, 5, 5};
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }

    SECTION("Maximum constraint lengths") {
        // Create lists with maximum allowed length (50 nodes each)
        vector<int> values1, values2;
        for (int i = 0; i < 50; i += 2) {
            values1.push_back(i);
        }
        for (int i = 1; i < 50; i += 2) {
            values2.push_back(i);
        }
        
        ListNode* list1 = createList(values1);
        ListNode* list2 = createList(values2);
        ListNode* result = solution.mergeTwoLists(list1, list2);
        
        vector<int> expected;
        for (int i = 0; i < 50; i++) {
            expected.push_back(i);
        }
        
        REQUIRE(listToVector(result) == expected);
        deleteList(result);
    }
}