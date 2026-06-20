public class ECommerceSearch {
    static class Product {
        int ProductID;
        String ProductName;
        String category;
        Product(int ProductID, String ProductName, String category) {
            this.ProductID = ProductID;
            this.ProductName = ProductName;
            this.category = category;
        }
    }
    public static Product linearSearch(Product[] products, int targetID) {
        for(Product product : products) {
            if(product.ProductID == targetID) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int targetID) {
        int left = 0;
        int right = products.length - 1;
        while(left <= right) {
            int mid = left + (right - left) / 2;
            if(products[mid].ProductID == targetID) {
                return products[mid];
            } 
            else if(products[mid].ProductID < targetID) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "CMF Earbuds", "Electronics"),
            new Product(2, "CMF Smartwatch", "Electronics"),
            new Product(3, "CMF Laptop", "Electronics"),
            new Product(4, "Nike Shoes", "Fashion")
        };
        int targetID = 3;
        Product found1 = linearSearch(products, targetID);
        if (found1 != null) {
            System.out.println("Linear Search: Product found - " + found1.ProductName);
        }
        Product found2 = binarySearch(products, targetID);
        if (found2 != null) {
            System.out.println("Binary Search: Product found - " + found2.ProductName);
        }
        System.out.println("TIME COMPLEXITY: Linear Search - O(n), Binary Search - O(log n)");
        System.out.println("Binary search is more suitable for large datasets");
    }
}