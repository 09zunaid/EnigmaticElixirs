import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, FlaskConical, ShoppingBag } from "lucide-react";

const savedFormulas = [
  {
    name: "Midnight Garden",
    notes: "Jasmine, Rose, Sandalwood, Bergamot",
    createdAt: "2023-10-26",
  },
  {
    name: "Coastal Driftwood",
    notes: "Cedarwood, Sea Salt, Lemon, Amber",
    createdAt: "2023-09-15",
  },
  {
    name: "Spiced Amber",
    notes: "Amber, Cinnamon, Vanilla, Black Pepper",
    createdAt: "2023-08-01",
  },
];

const orderHistory = [
  {
    orderId: "#EE-1204",
    date: "2023-10-28",
    total: "$150.00",
    status: "Shipped",
    items: "1x Midnight Garden (50ml)",
  },
  {
    orderId: "#EE-1198",
    date: "2023-09-16",
    total: "$150.00",
    status: "Delivered",
    items: "1x Coastal Driftwood (50ml)",
  },
   {
    orderId: "#EE-1152",
    date: "2023-08-02",
    total: "$150.00",
    status: "Delivered",
    items: "1x Spiced Amber (50ml)",
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-secondary min-h-full">
        <div className="container mx-auto px-4 py-12 md:py-20">
             <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-4xl">My Profile</CardTitle>
                    <CardDescription>Manage your creations, orders, and personal information.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="formulas" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="formulas"><FlaskConical className="mr-2 h-4 w-4" />Saved Formulas</TabsTrigger>
                            <TabsTrigger value="orders"><ShoppingBag className="mr-2 h-4 w-4" />Order History</TabsTrigger>
                        </TabsList>

                        <TabsContent value="formulas" className="mt-6">
                            <div className="space-y-4">
                                {savedFormulas.map((formula, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle className="font-headline text-xl">{formula.name}</CardTitle>
                                            <CardDescription>Created on {new Date(formula.createdAt).toLocaleDateString()}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="font-medium">Key Notes:</p>
                                            <p className="text-muted-foreground">{formula.notes}</p>
                                        </CardContent>
                                        <div className="p-6 pt-0">
                                            <Button>Re-order</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="orders" className="mt-6">
                            <Card>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Order ID</TableHead>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead className="text-right">Total</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {orderHistory.map((order) => (
                                            <TableRow key={order.orderId}>
                                                <TableCell className="font-medium">{order.orderId}</TableCell>
                                                <TableCell>{order.date}</TableCell>
                                                <TableCell>
                                                    <Badge variant={order.status === 'Shipped' ? 'default' : 'secondary'}>{order.status}</Badge>
                                                </TableCell>
                                                <TableCell className="text-right">{order.total}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </CardContent>
             </Card>
        </div>
    </div>
  );
}
