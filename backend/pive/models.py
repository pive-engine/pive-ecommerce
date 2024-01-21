from django.db import models
from django.conf import settings


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    # Replace `image_url` with an ImageField
    product_image = models.ImageField(
        upload_to="product_images/", default="path/to/default/image.jpg"
    )
    link = models.URLField()
    category = models.CharField(max_length=50)
    is_sale = models.BooleanField(default=False)
    sale_price = models.CharField(max_length=20, blank=True, null=True)
    new_product = models.BooleanField(default=False)

    # Existing fields
    short_description = models.TextField(max_length=255)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name
